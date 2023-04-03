import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {

  constructor(private readonly ordersRepository: OrdersRepository) { }

  async createOrder (request: CreateOrderRequest) {
    try {
      return this.ordersRepository.create(request);
    } catch (error) {

    }
  }

  async getOrders () {
    return this.ordersRepository.find({});
  }
}
