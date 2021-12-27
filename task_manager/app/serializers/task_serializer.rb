class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :body, :account_id
end
