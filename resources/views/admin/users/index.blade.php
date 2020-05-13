@extends('admin.app')

@section('content')
<div class="card">
	<div class="card-header">
		<div class="card-title">المستخدمين</div>
	</div>
	<div class="card-body">
		{!! $dataTable->table() !!}
	</div>
</div>
@endsection

@push('scripts')
<script src="https://cdn.datatables.net/buttons/1.0.3/js/dataTables.buttons.min.js"></script>
{!! $dataTable->scripts() !!}

 <script id="details-template" type="text/x-handlebars-template">
    @verbatim
    <table class="table">
        <tr>
            <td>جواز السفر</td>
            <td>{{passport_no}}</td>
        </tr>
        <tr>
            <td>تاريخ الميلاد</td>
            <td>{{date_of_birth}}</td>
        </tr>
        <tr>
            <td>البريد الالكتروني</td>
            <td>{{ email }}</td>
        </tr>
        <tr>
            <td>الرقم الوظيفي</td>
            <td>{{ employee_no }}</td>
        </tr>
        <tr>
            <td>المدينة</td>
            <td>{{ state }}</td>
        </tr>
        <tr>
            <td>العنوان</td>
            <td>{{ address }}</td>
        </tr>
        <tr>
            <td>الفرع / المصرف</td>
            <td>{{ branch }} / {{ bank }}</td>
        </tr>
        <tr>
            <td>ملف الرقم الوطني</td>
            <td><a href="{{ attachment }}"> تحميل </a></td>
        </tr>
    </table>
    @endverbatim
    </script>

    <script>
          var template = Handlebars.compile($("#details-template").html());
          var table = $('#users-table').DataTable();
          $('#users-table tbody').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = table.row( tr );
            if ( row.child.isShown() ) {
              // This row is already open - close it
              row.child.hide();
              tr.removeClass('shown');
            }
            else {
              // Open this row
              row.child( template(row.data()) ).show();
              tr.addClass('shown');
            }
          });
    </script>
@endpush

@push('styles')
<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.0.3/css/buttons.dataTables.min.css">
<style type="text/css">
.dt-buttons {
	direction: ltr
}
</style>
@endpush
