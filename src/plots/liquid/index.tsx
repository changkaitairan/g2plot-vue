import { defineComponent, App } from 'vue'
import { Liquid, LiquidOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type LiquidChartProps = Writeable<
  Omit<BaseChartProps<LiquidOptions>, 'chart'> & LiquidOptions
>

const LiquidChart = defineComponent<LiquidChartProps>({
  name: 'LiquidChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Liquid} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
LiquidChart.install = (app: App) => {
  app.component(LiquidChart.name, LiquidChart)
}

export default LiquidChart
