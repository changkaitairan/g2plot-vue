import { defineComponent } from 'vue'
import { StackedColumnLine, StackedColumnLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedColumnLineChartProps = Omit<
  BaseChartProps<StackedColumnLineConfig>,
  'chart'
> &
  StackedColumnLineConfig

const StackedColumnLineChart = defineComponent<StackedColumnLineChartProps>(
  (_, ctx) => {
    return <BaseChart chart={StackedColumnLine} {...ctx.attrs} />
  }
)

export default StackedColumnLineChart
