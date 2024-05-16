export interface generateToken {
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string
  token_type: string
}

type isLogged = {
  isLogged: true
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string
  token_type: string
  logout?: () => void
  refreshToken?: () => void
  userName?: string
  image?: string
}
type notLogged = {
  isLogged: false
  logout?: () => void
  refreshToken?: () => Promise<any>
  userName?: ""
  image?: null
}
type Props = isLogged | notLogged
