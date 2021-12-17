class AccountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :user, :name

  has_many :tasks
end
