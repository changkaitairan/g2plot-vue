import { defineComponent } from 'vue'
import { Treemap, TreemapConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TreemapChartProps = Omit<BaseChartProps<TreemapConfig>, 'chart'> &
  TreemapConfig

const TreemapChart = defineComponent<TreemapChartProps>((_, ctx) => {
  return <BaseChart chart={Treemap} {...ctx.attrs} />
})

export default TreemapChart
