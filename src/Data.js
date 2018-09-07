import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { sortBy } from 'lodash'

import collectData from './util/collectData'
import RefreshButton from './RefreshButton'
import ScalarData from './ScalarData'
import VideoData from './VideoData'

const Outer = styled.div`
  position: relative;
  min-height: 100px;
  min-width: 200px;
`

const RefreshHeader = styled.div`
  position: relative;
  height: 46px;
`

const FloatRight = styled.div`
 position: absolute;
 top: 0;
 right: 0;
`

class Data extends Component {
  componentDidMount () {
    this.props.onReadOneIfNeeded()
  }

  render () {
    const { readingOne, onRereadOne, experiment, data } = this.props
    let contents
    if (data) {
      if (data.length) {
        const categorisedData = collectData(sortBy(data, '_t'))
        const scalars = ['episode_total_reward', 'episode_reward_mean', 'loss_ent'].map((field, i) => {
          if (categorisedData[field]) {
            return <div key={field}>
              <ScalarData
                label={field} {...categorisedData[field]}
                ignore={5}
                colorOffset={i}
              />
            </div>
          } else {
            return null
          }
        })
        let animation
        if (categorisedData.animation) {
          categorisedData.animation.values = categorisedData.animation.values.map(sha1 =>
            `${experiment.id}/${sha1}`)
          animation = categorisedData.animation
            ? <VideoData label='Animation' {...categorisedData.animation} />
            : null
        }
        contents = <div>
          {scalars}
          {animation}
        </div>
      } else {
        contents = <div>No data</div>
      }
    }
    return <Outer>
      <RefreshHeader><FloatRight><RefreshButton
        onClick={onRereadOne}
        readyState={readingOne}
      /></FloatRight></RefreshHeader>
      {contents}
    </Outer>
  }
}

Data.propTypes = {
  experiment: PropTypes.object.isRequired,
  readingOne: PropTypes.string.isRequired,
  data: PropTypes.array,
  onReadOneIfNeeded: PropTypes.func.isRequired,
  onRereadOne: PropTypes.func.isRequired
}

export default Data
