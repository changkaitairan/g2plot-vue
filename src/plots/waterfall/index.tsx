import { defineComponent } from 'vue'
import { Waterfall, WaterfallConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type WaterfallChartProps = Omit<
  BaseChartProps<WaterfallConfig>,
  'chart'
> &
  WaterfallConfig

const WaterfallChart = defineComponent<WaterfallChartProps>((_, ctx) => {
  return <BaseChart chart={Waterfall} {...ctx.attrs} />
})

export default WaterfallChart
