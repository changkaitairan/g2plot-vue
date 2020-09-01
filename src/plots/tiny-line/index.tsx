import { defineComponent } from 'vue'
import { TinyLine, TinyLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyLineChartProps = Omit<BaseChartProps<TinyLineConfig>, 'chart'> &
  TinyLineConfig

const TinyLineChart = defineComponent<TinyLineChartProps>((_, ctx) => {
  return <BaseChart chart={TinyLine} {...ctx.attrs} />
})

export default TinyLineChart
