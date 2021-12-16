module Api
  module V1
    class AccountsController < ApplicationController
      protect_from_forgery with: :null_session
      # Get /Accounts
      def index
        accounts = Account.where(user: params[:user])

        render json: AccountSerializer.new(accounts).serialized_json
      end
      
      # Get /Accounts/1
      def show
        account = Account.find(params[:id])

        render json: AccountSerializer.new(account).serialized_json
      end

      def create
        account = Account.new(account_params)

        if account.save
          render json: AccountSerializer.new(account).serialized_json
        else
          render json: { error: account.error.messages }, status: 422
        end
      end

      private
        def account_params
          params.require(:account).permit(:user, :name)
        end
    end    
  end
end