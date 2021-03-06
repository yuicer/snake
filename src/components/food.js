/*
  bug：生成时位置如果相同会互相挤出去
*/
var features = [
  'speed',
  'power'
]
var color = {
  speed: '#93b874',
  power: '#BD2D30'
}
AFRAME.registerComponent('food', {
  schema: {
    box_width: {
      default: 10
    },
    box_height: {
      default: 10
    },
    box_depth: {
      default: 10
    }
  },
  init() {
    var me = this,
      position = me.GetFoodPosition()
    me.GetFootFeature()
    me.el.setAttribute('position', position)
    me.el.setAttribute('dynamic-body', '')
    me.el.setAttribute('color', color[me.feature])
  },
  remove() {
    //移除之后销毁位置的存储
  },
  GetFoodPosition() {
    var me = this,
      position = {}
    position.x = Math.round(Math.random() * me.data.box_width) - me.data.box_width / 2
    position.y = Math.round(Math.random() * me.data.box_height) - me.data.box_height / 2
    position.z = Math.round(Math.random() * me.data.box_depth) - me.data.box_depth / 2
    return position
  },
  DetactDeduplication() {
    //检测是否有重复的位置
  },
  GetFootFeature() {
    var me = this,
      flag = Math.random() > 0.5 ? 0 : 1
    me.feature = features[flag]
  }
})
