class AccountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user, :name

  has_many :tasks
end
