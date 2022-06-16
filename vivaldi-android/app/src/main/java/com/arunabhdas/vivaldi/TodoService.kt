package com.arunabhdas.vivaldi

import retrofit2.Response
import retrofit2.http.GET

interface TodoService {
    @GET
    fun getTodos(): Response<List<Todo>>
}