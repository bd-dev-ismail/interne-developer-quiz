
import React from 'react';
import { useLoaderData } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,

} from "recharts";
import './Statistics.css';
const Statistics = () => {
  const quizsData = useLoaderData();
  const data = quizsData.data;
   return (
     <>
       <div className='container mx-auto'>
         <h3 className="text-3xl font-bold my-6">Developer Quiz Chart</h3>
         <div className="chart">
           <div className="chart-container">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart
                 width={500}
                 height={400}
                 data={data}
                 margin={{
                   top: 10,
                   right: 30,
                   left: 0,
                   bottom: 0,
                 }}
               >
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip />
                 <Area
                   type="monotone"
                   dataKey="total"
                   stroke="#8884d8"
                   fill="#8884d8"
                 />
               </AreaChart>
             </ResponsiveContainer>
           </div>
         </div>
       </div>
     </>
   );
  

};

export default Statistics;
