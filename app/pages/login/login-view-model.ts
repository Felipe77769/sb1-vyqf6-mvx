import { Observable } from '@nativescript/core'

export class LoginViewModel extends Observable {
    email: string = ''
    password: string = ''

    constructor() {
        super()
    }

    onLoginTap() {
        // TODO: Implement login logic
        console.log('Login attempt:', this.email)
    }

    onRegisterTap() {
        // TODO: Navigate to register page
        console.log('Navigate to register')
    }
}

export function createViewModel() {
    return new LoginViewModel()
}