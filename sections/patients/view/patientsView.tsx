import Scrollbar from '@/components/scrollbar';
import { useAppDispatch } from '@/hooks/hooks';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { getPatients } from '@/slices/patientsSlice';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientsTableHead from '../PatientsTableHead';
import PatientsTableRow from '../PatientsTableRow';
import PatientsTableToolbar from '../PatientsTableToolbar';
import TableEmptyRows from '../TableEmptyRows';
import TableNoData from '../TableNoData';
import { TypeListOfPatients } from '../types/types';
import { applyFilter, emptyRows, getComparator } from '../utils';

export default function PatientsView() {

  const [page, setPage] = useState<number>(0);

  const [order, setOrder] = useState<'desc' | 'asc'>('asc');

  const [orderBy, setOrderBy] = useState<string>('name');

  const [filterName, setFilterName] = useState<string>('');

  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [listPatients, setListPatients] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const axiosInstance = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getPatientApi = async () => {
      const response = await dispatch(getPatients({ axiosInstance, controller }))
 
      isMounted && setListPatients(response.payload.listOfPatients);
      setIsLoaded(true)
    }
    getPatientApi();
    return () => {
      isMounted = false;
      controller.abort();
    }
  }, [])

  const handleSort = (_event: React.MouseEvent<HTMLSpanElement>, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    if (property !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    }
  };

  const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleNewPatient = () => {
    navigate('/pacientes/nuevo-paciente')
  }
  const dataFiltered = applyFilter({
    inputData: listPatients,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <>
      <div className={`patient-item-view ${isLoaded ? 'loaded' : ''}`}>
        <Container>

          <Card>
            <PatientsTableToolbar
              filterName={filterName}
              onFilterName={handleFilterByName}
              handleNewPatient={handleNewPatient}
            />

            <Scrollbar>
              <TableContainer sx={{ overflow: 'unset' }}>
                <Table sx={{ minWidth: 800 }}>
                  <PatientsTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleSort}
                    headLabel={[
                      { id: 'Id', label: 'Id' },
                      { id: 'Nombre', label: 'Nombre' },
                      { id: 'Telefono', label: 'Telefono' },
                      { id: 'Email', label: 'Email' },
                      { id: 'Distrito', label: 'Distrito', align: 'center' },
                      { id: 'Identificacion', label: 'Identificacion' },
                      { id: '' },
                    ]}
                  />

                  <TableBody>
                    {dataFiltered
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row: TypeListOfPatients, index: number) => {
                        
                        return <PatientsTableRow
                          key={row.id_patient+"-"+row.full_name}
                          id_numeric={row.id_patient}
                          full_name={row.full_name}
                          phone_movil={row.phone_movil}
                          code_value={row.code_value}
                          email={row.email}
                          city={row.city}
                          identification_document={row.identification_document}
                          row={row}
                        />
                      })
                      }
                    <TableEmptyRows
                      height={77}
                      emptyRows={emptyRows(page, rowsPerPage, listPatients.length)}
                    />

                    {notFound && <TableNoData query={filterName} />}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>

            <TablePagination
              page={page}
              component="div"
              count={listPatients.length}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>

        </Container>
      </div>
    </>
  );
}
