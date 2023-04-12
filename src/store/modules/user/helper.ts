import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://memory-1316723528.cos.ap-beijing.myqcloud.com/avatar/memory.jpg',
      name: 'Memory',
      description: 'Go see the <a href="https://memory-1316723528.cos.ap-beijing.myqcloud.com/yanhua/yanhuaI/yanhuaI.html" class="text-blue-500" target="_blank" >fireworks</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
