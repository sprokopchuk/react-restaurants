DatabaseCleaner.clean_with :truncation
puts 'Database is cleaned'
100.times do
  User.create!(email: Faker::Internet.email, password: '1234')
end

puts 'Users are created'


100.times do
  Restaurant.create!(name: Faker::Lorem.sentence,
                     description: Faker::Lorem.paragraph,
                     address: Faker::Address.street_address,
                     city: Faker::Address.city,
                     lat: Faker::Address.latitude,
                     lon: Faker::Address.longitude,
                     zip: Faker::Address.zip,
                     phone_numbers: Faker::PhoneNumber.cell_phone )
end

puts 'Restaurants are created'
