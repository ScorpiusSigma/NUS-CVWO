module Api
  module V1
    class AccountsController < ApplicationController
      def index
        accounts = Account.all

        render json: AccountSerializer.new(accounts, options).serialized_json
      end

      def show
        account = Account.find_by(user: params[:user])

        render json: AccountSerializer.new(account, options).serialized_json
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

        def options
          @options ||* {include: %i[tasks]}
        end

    end    
  end
end