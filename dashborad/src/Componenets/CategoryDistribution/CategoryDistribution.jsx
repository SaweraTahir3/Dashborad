// import React from 'react'

// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

// const CategoryData = [
//     { name: "Electronics ", value: 4500 },
//     { name: "Clothing ", value: 3200 },
//     { name: "Home ", value: 2500 },
//     { name: "Books ", value: 2100 },
//     { name: "Sport & Outdoors", value: 1900 },
// ];

// const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B']
// const CategoryDistribution = () => {
//     return (
//         <div>
//             <div className=' bg-gray-800  ml-[21%] bg-opacity-25  backdrop-blur-md shadow-lg rounded-xl  p-6  border border-gray-900'>
//                 <h2 className='text-lg  font-medium  mb-4 text-gray-100'>CategoryDistrubution</h2>
//                 <div className=' h-90'>

//                     <ResponsiveContainer  className='z-1'  width={'100%'} height={'100%'}>
//                         <PieChart>
//                             <Pie
//                                 data={CategoryData}
//                                 cx={'50%'}
//                                 cy={'50%'}
//                                 labelLine={false}
//                                 outerRadius={80}
//                                 fill ='#8884d8'
//                                 dataKey='value'
//                                 label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
//                                 {CategoryData.map((entry, index) => (
//                                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                 ))}
//                             </Pie>
//                             <Tooltip contentStyle={{
//                                 backgroundColor: "rgba(31,41,55 ,0.8)",
//                                 borderColor: '#4B5563'
//                             }} itemStyle={{ color: '#E5E7EB' }} />
//                     <Legend/>
//                         </PieChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CategoryDistribution



import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: "Electronics ", value: 2000 },
    { name: "Clothing ", value: 3200 },
    { name: "Home ", value: 3500 },
    { name: "Books ", value: 7100 },
     { name: "Sport & Outdoors", value: 1900 },
 ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
        <div className=' bg-purple-500  ml-[21%] bg-opacity-25 border-b  backdrop-blur-md shadow-lg rounded-xl  p-6 z-1 border-purple-900 '>
                        <h2 className='text-3xl  font-medium    mb-4 text-gray-900'>Category Distrubution</h2>
      <div className='h-80'>

      <ResponsiveContainer className="z-1" width="100%" height="100%">
        <PieChart width={900} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >


            
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        

          </Pie>
        </PieChart>
      </ResponsiveContainer>
  
 </div>
  </div>
    
    );
  }
}
