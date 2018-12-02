import { Component, OnInit } from '@angular/core';
declare let google: any;

@Component({
  selector: 'app-report-gen',
  templateUrl: './report-gen.component.html',
  styleUrls: ['./report-gen.component.scss']
})
export class ReportGenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        let data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);

        let options = {
            title: 'My Daily Activities'
        };

        let chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }
}

}
