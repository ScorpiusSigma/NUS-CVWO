module Api
  module V1
    class TasksController < ApplicationController
      def index
      end

      def create
        task = Task.new(tasks_params)

        if task.save
          render json: TasksSerializer.new(task).serialized_json
        else
          render json: { error: task.error.messages }, status: 422
        end
      end

      def update
        task = Task.find(params[:id])

        if task.update(tasks_params)
          render json: TasksSerializer.new(task).serialized_json
        else
          render json: { error: task.error.messages }, status: 422
        end
      end

      def destroy
        task = Task.find(params[:id])

        if task.destroy
          head: no_content
        else
          render json: { error: task.error.messages }, status: 422
        end
      end

      private
        def tasks_params
          params.require(:task).permit(:title, :body)
        end
    end    
  end
end