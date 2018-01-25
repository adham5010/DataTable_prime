import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs'
import { Observable } from "rxjs/Observable";

export interface User {
    id: number;
    user_id: number;
    profile_picture: string;
    profile_description: string;
    level: number;
    revenue: number;
    trophy: number;
    content: string;
    xp: number;
    city: string;
    country: string;
    postal_code: string;
    line1: string;
    state: string;
    first_name: string;
    last_name: string;
    password: string;
    email: string;
    type_of_account: string;
    social_id: string;
    user_name: string;
    creation_date: string;
    stripe_customer_id: string;
    player_id: string;
}

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {
    }
    public headers = new Headers({ 'Content-type': 'application/json' });
    Users: any = [];
    getAllUsers():Observable<User[]> {
        return this.http.get<User[]>('https://atk-api.firebaseio.com/users.json')
        
    }
}