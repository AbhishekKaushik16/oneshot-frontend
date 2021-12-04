import React, {useEffect, useState} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {getCollegeByState} from '../../api';


ChartJS.register(ArcElement, Tooltip, Legend);


export const dict = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(127 ,255, 212, 0.2)',
          'rgba(0, 255, 255, 0.2)',
          'rgba(255, 20, 147, 0.2)',
          'rgba(255, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(127 ,255, 212, 1)',
          'rgba(0, 255, 255, 1)',
          'rgba(255, 20, 147, 1)',
          'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

export const DoughnutChart = ({setListData}) => {
    const [college, setCollege] = useState(null);
    const [apiData, setApiData] = useState(null);
  
    useEffect(() => {
        getCollegeByState().then(res => {
          let labels = [];
          let size = [];
          setApiData(res.data);
          for (var key in res.data) {
            labels.push(key);
            size.push(res.data[key].length);
          }
          dict['labels'] = labels;
          dict['datasets'][0]['data'] = size;
          setCollege(dict);
        })}, [college]);
    
    return (
        <div>
            <Doughnut
                data={college}
                getElementAtEvent={(ele, evt) => {
                if(evt.type === 'click' && ele.length > 0){
                    setListData(apiData[college['labels'][ele[0]['index']]]);
                }
                }}
            />
        </div>
    )
};
