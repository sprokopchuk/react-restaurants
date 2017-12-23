DatabaseCleaner.clean_with :truncation
puts 'Database is cleaned'
100.times do
  User.create!(email: Faker::Internet.email, password: '1234')
end

puts 'Users are created'

%w(Italian American Japanese Chinese Thai Mexican).each do |name|
  Cuisine.create!(name: name)
end

puts 'Cuisines are created'

cuisines = Cuisine.all

100.times do
  r = Restaurant.create!(name: Faker::Lorem.sentence,
                         description: Faker::Lorem.paragraph,
                         address: Faker::Address.street_address,
                         city: Faker::Address.city,
                         lat: Faker::Address.latitude,
                         lon: Faker::Address.longitude,
                         zip: Faker::Address.zip,
                         phone_numbers: Faker::PhoneNumber.cell_phone)

  r.cuisines << cuisines.sample(2)
end

puts 'Restaurants are created'
