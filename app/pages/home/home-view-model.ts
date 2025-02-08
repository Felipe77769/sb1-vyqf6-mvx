import { Observable } from '@nativescript/core'

export class HomeViewModel extends Observable {
    balance: string = 'R$ 1.000,00'
    pixBalance: string = 'R$ 500,00'
    transactions: Array<any> = [
        { description: 'Pix Recebido - João', amount: 'R$ 100,00' },
        { description: 'Pagamento - Conta de Luz', amount: '-R$ 150,00' },
        { description: 'Transferência enviada', amount: '-R$ 50,00' }
    ]

    constructor() {
        super()
    }

    onPixTap() {
        console.log('Pix tapped')
    }

    onPayTap() {
        console.log('Pay tapped')
    }

    onTransferTap() {
        console.log('Transfer tapped')
    }
}

export function createViewModel() {
    return new HomeViewModel()
}