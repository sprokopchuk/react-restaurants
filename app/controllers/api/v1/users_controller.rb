class Api::V1::UsersController < ApplicationController
  def index
    respond_with Users.all
  end
end
