import React from 'react'
import Moment from 'react-moment'
import Box from './UI/Box'
import Heading from './UI/Heading'
import Link from './UI/Link'
import Text from './UI/Text'
import { valuta } from '../utils/numbers'
import { name } from '../utils/text'
import Message from './UI/Message'

const propsByEvent = (event, viewer) => {

  switch(event.__typename) {

    case 'ViewedProfile': {
      const { lead } = event
      return {
        icon: 'eye',
        iconColor: 'ocean',
        text: <Text m={0}>{name(lead.user, viewer)} viewed page {lead.profile.name}.</Text>
      }
    }

    case 'PerformedAction': {
      const { lead, action } = event
      return {
        icon: 'success',
        iconColor: 'grass',
        text: <Text m={0}>{name(lead.user, viewer)} <bold>{action.name}</bold></Text>
      }
    }

    case 'ReceivedReward': {
      const { reward, incentive, lead } = event
      const { actor } = reward
      const { action } = incentive

      const text =  reward.value === incentive.value
        ? <Text m={0}>{name(lead.user, viewer)} got a full {valuta(reward.value)} reward because <Link to={actor.id}>{name(actor.user)}</Link> {action.name}.</Text>
        : <Text m={0}>{name(lead.user, viewer)} got a {valuta(reward.value)} cut of the original {valuta(incentive.value)} reward because <Link to={actor.id}>{name(actor.user)}</Link> {action.name}.</Text>

      return { text, icon: 'reward', iconColor: 'beach'}
    }

    default:
      throw new Error(`Event ${event.__typename} is not implemented yet`)
  }
}

export default ({ viewer, event }) => <Message { ...propsByEvent(event, viewer) } key={event.id} date={event.createdAt} />
