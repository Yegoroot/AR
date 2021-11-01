import * as THREE from 'three'
import { flatten } from 'lodash'
import { SVGLoader as loader } from './SVGLoader'
import './styles.sass'
import night from '../../../assets/svg/night.svg'
import city from '../../../assets/svg/city.svg'
import morning from '../../../assets/svg/morning.svg'
import woods from '../../../assets/svg/woods.svg'
import beach from '../../../assets/svg/beach.svg'

const doubleSide = THREE.DoubleSide
const deg = THREE.Math.degToRad
const colors = ['#21242d', '#ea5158', '#0d4663', '#2d4a3e', '#8bd8d2'] // '#ffbcb7',
const svgs = [night, city, morning, woods, beach].map(
  url =>
    new Promise(resolve =>
      new loader().load(url, shapes =>
        resolve(
          flatten(
            shapes.map((group, index) =>
              group
                .toShapes(true)
                .map(shape => ({ shape, color: group.color, index }))
            )
          )
        )
      )
    )
)

export { svgs, colors, deg, doubleSide }
