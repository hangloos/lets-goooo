ActiveAdmin.register Location do
  permit_params :name, :address, :city, :zipcode

end
