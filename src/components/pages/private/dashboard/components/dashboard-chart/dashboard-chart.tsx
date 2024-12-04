import {Select} from '@/components/common'
import {useMemo} from 'react'
import Chart from 'react-apexcharts'

export const DashboardChart = () => {
  const data = useMemo(
    () => ({
      series: [
        {
          name: 'Total views',
          data: [...new Array(30)].map(() => {
            const num = Math.floor(Math.random() * 600)
            if (num < 100) {
              return num + 400
            } else if (num < 200) {
              return num + 300
            } else if (num < 300) {
              return num + 200
            } else if (num < 500) {
              return num + 100
            }
            return num
          }),
        },
      ],
      options: {},
    }),
    [],
  )

  return (
    <div className="bg-white border border-blue-4 p-3 md:p-7 rounded-2xl w-full h-full">
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-4">
        <Select
          options={[
            {label: 'Total Viewed', value: 'total-viewed'},
            {label: 'Last 7 days Viewed', value: 'last-7days'},
          ]}
          defaultValue="total-viewed"
          className="w-full md:w-56 text-base text-blue-1 font-medium leading-6 bg-white border border-blue-4 px-4 py-3"
        />
        <Select
          options={[
            {label: 'January', value: 'january'},
            {label: 'February', value: 'february'},
            {label: 'March', value: 'march'},
          ]}
          defaultValue="march"
          className="w-full md:w-44 text-base text-blue-1 font-medium leading-6 bg-white border border-blue-4 px-4 py-3"
        />
      </div>
      <Chart
        options={{
          chart: {
            height: 350,
            type: 'area',
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
          },
          xaxis: {
            type: 'datetime',
            categories: [...new Array(30)].map((_, index) => {
              const date = new Date()
              date.setDate(index + 1)
              return date.toISOString()
            }),
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy',
            },
          },
        }}
        series={data.series}
        type="area"
        height={300}
        width="100%"
      />
    </div>
  )
}
