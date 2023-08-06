import {Subscription} from 'rxjs';

export class SubscriptionsManager {
  subscriptions: Array<Subscription> = [];

  autoUnsubscribe(s: Subscription): void {
    this.subscriptions.push(s);
  }

  destroy() {
    this.subscriptions.map((sub: Subscription) => {
      sub.unsubscribe();
    });
    this.subscriptions = [];
  }
}












