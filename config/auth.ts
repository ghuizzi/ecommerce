/**
 * Config source: https://git.io/JY0mp
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import { AuthConfig } from '@ioc:Adonis/Addons/Auth'


const authConfig: AuthConfig = {
  guard: 'api',
  guards: {
    
    
      api: {
        driver: 'oat',
        provider: {
          driver: 'lucid',
          identifierKey: 'id',
          uids: ['email'],
          model: () => import('App/Models/User'),
        },
        tokenProvider: {
          type: 'api',
          driver: 'database',
          table: 'api_tokens',
          foreignKey: 'user_id',
        },
      }
    
  },
}

export default authConfig
