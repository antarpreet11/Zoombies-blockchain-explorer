import React from 'react'
import LogCardMinted from './CustomLists/LogCardMinted'
import LogDailyReward from './CustomLists/LogDailyReward'
import LogPackOpened from './CustomLists/LogPackOpened'

const CustomLists = (props) => {

    return (
        <div>
            <LogCardMinted contractzoombies={props.contractzoombies} acc={props.acc}>LogCardMinted</LogCardMinted>
            <LogDailyReward contractzoombies={props.contractzoombies}>LogDailyReward</LogDailyReward>
            <LogPackOpened contractzoombies={props.contractzoombies}>LogPackOpened</LogPackOpened>
        </div>
    )
}

export default CustomLists