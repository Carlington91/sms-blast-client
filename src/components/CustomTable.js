import { memo } from 'react';

import {
  Pagination,
  PaginationOpts,
  TableHeader,
  TableBody,
  Filter,
  useDatatableLifecycle,
  shouldTableUpdate,
} from 'react-bs-datatable';

const CustomTable = memo((props) => {
  const {
    data,
    rowsPerPageOption,
    tableHeaders,
    onChangeFilter,
    onPageNavigate,
    classes,
    onRowsPerPageChange,
    onSortChange,
    onRowClick,
    labels,
    filterable,
    filterText,
    rowsPerPage,
    currentPage,
    sortedProp,
    maxPage,
    Components,
  } = useDatatableLifecycle(props);

  return (
    <>
      <div className='controlRow__root row'>
        <div className='col-md-2 col-sm-4'>
          <PaginationOpts
            classes={classes}
            labels={labels}
            onRowsPerPageChange={onRowsPerPageChange}
            rowsPerPage={rowsPerPage}
            rowsPerPageOption={rowsPerPageOption}
            components={{
              Form: Components.Form,
              FormGroup: Components.FormGroup,
              FormControl: Components.FormControl,
            }}
          />
        </div>

        <div className='col-sm-6 col-md-4 offset-md-6'>
          <Filter
            classes={classes}
            tableHeaders={tableHeaders}
            placeholder={labels.filterPlaceholder}
            onChangeFilter={onChangeFilter}
            filterText={filterText}
            filterable={filterable}
            components={{
              Adornment: Components.FaPlus,
              Button: Components.Button,
              ClearIcon: Components.ClearIcon,
              FormControl: Components.FormControl,
              InputGroup: Components.InputGroup,
            }}
          />
        </div>
      </div>

      <table className={classes.table ? classes.table : 'table'}>
        <TableHeader
          classes={classes}
          tableHeaders={tableHeaders}
          sortedProp={sortedProp}
          onSortChange={onSortChange}
          components={{
            TableHead: Components.TableHead,
            TableCell: Components.TableCell,
            TableRow: Components.TableRow,
          }}
        />

        <TableBody
          classes={classes}
          tableHeaders={tableHeaders}
          labels={labels}
          data={data}
          onRowClick={onRowClick}
          components={{
            TableBody: Components.TableBody,
            TableCell: Components.TableCell,
            TableRow: Components.TableRow,
          }}
        />
      </table>
      <div className='bottom d-flex justify-content-end mt-5'>
        {rowsPerPage <= data.length && (
          <Pagination
            classes={classes}
            data={data}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            onPageNavigate={onPageNavigate}
            labels={labels}
            maxPage={maxPage}
            components={{
              Button: Components.Button,
              ButtonGroup: Components.ButtonGroup,
            }}
          />
        )}
      </div>
    </>
  );
}, shouldTableUpdate);

export default CustomTable;
