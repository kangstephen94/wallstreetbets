# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'companylistnew.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Asset.new
  t.symbol = row['Symbol']
  t.name = row['Name']
  t.last_price = row['LastPrice']
  t.market_cap = row['MarketCap']
  t.ipo_year = row['IPOyear']
  t.sector = row['Sector']
  t.industry = row['Industry']
  t.save
  puts "#{t.name}, #{t.symbol} saved"
end

puts "There are now #{Asset.count} rows in the transactions table"
