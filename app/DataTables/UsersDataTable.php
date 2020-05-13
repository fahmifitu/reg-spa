<?php

namespace App\DataTables;

use App\User;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class UsersDataTable extends DataTable
{
    protected $exportColumns = [
        'name','national_id','passport_no','date_of_birth','email','employee_no','other_employer','phone','state','address','bank','branch'
    ];
    /**
     * Build DataTable class.
     *
     * @param mixed $query Results from query() method.
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        return datatables()
            ->eloquent($query)
            ->editColumn('created_at', function ($user) {
                return $user->created_at->format('Y/m/d H:m:s');
            })
            ->filterColumn('created_at', function ($query, $keyword) {
                $query->whereRaw("DATE_FORMAT(created_at,'%Y/%m/%d') like ?", ["%$keyword%"]);
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\User $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(User $model)
    {
        return $model->newQuery();
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                    ->setTableId('users-table')
                    ->columns($this->getColumns())
                    ->minifiedAjax()
                    ->dom('Bfrtip')
                    ->orderBy(1)
                    ->buttons(
                        Button::make('reload'),
                        Button::make('excel'),
                        Button::make('csv')
                    );
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            Column::make('id')->title('#'),
            Column::make('name')->title('الاسم'),
            Column::make('national_id')->title('الرقم الوطني'),
            Column::make('phone')->title('رقم الهاتف'),
            Column::make('other_employer')->title('جهة العمل'),
            Column::make('created_at')->title('تاريخ التسجيل'),
            Column::make(null)
                ->className('details-control')
                ->title('المزيد')
                ->searchable(false)
                ->orderable(false)
                ->exportable(false)
                ->printable(false)
                ->defaultContent('<button class="btn btn-sm btn-outline-dark"> تفاصيل </button>')
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'Users_' . date('YmdHis');
    }
}
