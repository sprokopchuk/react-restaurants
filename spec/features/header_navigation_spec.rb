feature 'Header navigation', js: true do
  scenario 'User switches between tabs' do
    visit '/'
    click_link 'Restaurants'
    expect(page).to have_current_path('/restaurants/new')
    expect(page).to have_text('Place marker where your restaurant is located')
  end
end