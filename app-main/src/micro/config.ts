interface IConfig {
  name: string
  entry: string
  container: string
  activeRule: string
}

const config: IConfig[] = [
  {
    name: 'sub-vue3',
    entry: process.env.VUE_APP_SUB_VUE as string,
    container: '#subapp',
    activeRule: '/app/sub-vue3'
  }
]

export default config
