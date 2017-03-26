import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr>
            <event-thumbnail (eventClick)="handelEventClick($event)" [event]="event"></event-thumbnail>
        </div>
    `
})
export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connector',
        date: '9/26/2036',
        time: '10:10 am',
        price: 599.99,
        imageUrl: '/app/assets/iamges/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'london',
            country: 'England',
        }
    }
    
    handelEventClick(data) {
        console.log(data)   
    }
}