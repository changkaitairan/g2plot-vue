import { defineComponent } from 'vue'
import { PercentStackedBar, PercentStackedBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PercentStackedBarChartProps = Omit<
  BaseChartProps<PercentStackedBarConfig>,
  'chart'
> &
  PercentStackedBarConfig

const PercentStackedBarChart = defineComponent<PercentStackedBarChartProps>(
  (_, ctx) => {
    return <BaseChart chart={PercentStackedBar} {...ctx.attrs} />
  }
)

export default PercentStackedBarChart
