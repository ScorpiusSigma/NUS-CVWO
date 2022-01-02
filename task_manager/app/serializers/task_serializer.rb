class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :category, :body, :account_id
end
