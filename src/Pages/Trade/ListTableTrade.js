
//////////////////////////////////////////////////////////////////////////////////////
//    Author - Anshuman
//    Version - 1.0
//    Date - 24 june 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ListTable
//    DESCRIPTION - ListTable Component
//////////////////////////////////////////////////////////////////////////////////////
import React, { useMemo, useState, useEffect } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { CSVLink } from "react-csv";
import GlobalFilter from '../Trade/GlobalFilter';
import { format } from 'date-fns'
import axios from 'axios'
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'


function ListTableTrade(props) {

    const [bounce, setbounce] = useState('hidden')
    const columns = useMemo(() => props.columns, [])
    const data = useMemo(() => props.dataList, [props.dataList])
    // console.log('lll ',data.length)
    useEffect(() => {
        setPageSize(7)
    }, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // rows,//since used pagination
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 }
    }, useGlobalFilter, useSortBy, usePagination)

    const { globalFilter, pageIndex, pageSize } = state

    return (
        <>

            <div className="flex mb-2 pb-2">
                <div className='flex-initial'><GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /></div>
                <div className='flex-initial ml-2'><button className='bg-sky-400 px-3 pr-3  shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center relative' onMouseEnter={() => setbounce('')} onMouseLeave={() => setbounce('hidden')}><CSVLink data={props.dataList}>Export</CSVLink><div className={bounce + ' absolute h-full top-3 text-sm left-0 text-center animate-bounce'}><AiOutlineArrowDown /></div></button></div>
                <div className='flex-1'>{props.children}</div>
                {
                    props.assessmentType && <div className='flex-initial flex'><div className="flex">
                        <div className='flex-initial h-4 w-4 text-green-900 text-xs font-semibold text-center bg-green-200 rounded-full flex-initial ml-4 '>N</div><div className='flex-initial text-xs ml-2'> New Assessment</div>
                        <div className='flex-initial h-4 w-4 bg-blue-200 h-4 w-4 text-blue-900 text-xs font-semibold text-center rounded-full flex-initial ml-4'>R</div><div className='flex-initial text-xs ml-2'> Re-Assessment</div>
                        <div className='flex-initial h-4 w-4 bg-red-200 h-4 w-4 text-red-900 text-xs font-semibold text-center rounded-full flex-initial ml-4'>M</div><div className='flex-initial text-xs ml-2'> Mutation</div>
                    </div>
                        <div></div>
                        <div></div>
                    </div>
                }
            </div>
            <div className=" py-2 overflow-x-auto bg-white">
                <div className="inline-block min-w-full rounded-lg overflow-hidden bg-white">
                    <table {...getTableBodyProps} className="min-w-full leading-normal">
                        <thead className='font-bold text-left text-sm bg-gray-100 hover:bg-gray-200'>
                            {
                                headerGroups?.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map((column) => (
                                                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">{column.render('Header')}
                                                    <span>{column.isSorted ? (column.isSortedDesc ? '⬆️' : '⬇️') : ''}</span></th>

                                            ))
                                        }
                                    </tr>
                                ))
                            }

                        </thead>
                        <tbody {...getTableBodyProps()} className="text-sm">
                            {/* {rows.map((row) => { */} {/**since used pagination */}
                            {page?.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()} className="bg-white shadow-lg border-b border-gray-200 hover:bg-gray-50 ">
                                        {row?.cells?.map((cell) => {
                                            return <td {...cell.getCellProps()} className="px-2 py-2 text-sm text-left">{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                                )
                            })}
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='mt-3 grid grid-cols-12'>
                        {/* <span> Search Page Option
                            | Go to page : {''}
                            <input className='border-2 border-black rounded-lg' type="text" defaultValue={pageIndex + 1} onChange={(e) => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(pageNumber)
                            }} />
                        </span> */}
                        <div className='col-span-2'>  <select className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                            {[5, 10, 25, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    show {pageSize}
                                </option>
                            ))}

                        </select></div>
                        <div className='col-span-4 text-center col-start-5'>   <span >
                            page {''}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{''}
                        </span></div>

                        <div className='col-span-4 text-right'><button className='cursor-pointer hover:bg-sky-300 p-2 hover:text-white' onClick={() => gotoPage(0)} disabled={!canPreviousPage}><AiOutlineDoubleLeft /> </button>
                            <button className={(!canPreviousPage ? 'opacity-50' : 'opacity-100') + ' text-xl hover:bg-sky-300 hover:text-white'} onClick={() => previousPage()} disabled={!canPreviousPage}>⬅️</button>
                            <button className={(!canNextPage ? 'opacity-50' : 'opacity-100') + ' text-xl hover:bg-sky-300 hover:text-white'} onClick={() => nextPage()} disabled={!canNextPage}>➡️</button>
                            <button className='cursor-pointer hover:bg-sky-300 p-2 hover:text-white' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>  <AiOutlineDoubleRight /></button></div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default ListTableTrade
/**
 * Exported to :
 * 1. MailboxContent Component
 * 2. PropertySafApplicationList Component
 * 
 */