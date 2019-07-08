Checkout from Github https://github.com/fo-am/iAllotment-app

Run 'yarn' in top directory
Run 'pod install' in ios directory

Run 'bundle install' in 'Deployment\fastlane'
Run 'bundle update fastlane' in 'Deployment\fastlane' directory
Run 'bundle exec fastlane add_plugin fastlane-plugin-appico' in 'Deployment\fastlane' directory
Run 'bundle exec fastlane add_plugin fastlane-plugin-badge' in 'Deployment\fastlane' directory

Run 'bundle exec fastlane ios beta' in 'Deployment/fastlane' directory.


If there are signing issues try things like...

Run 'fastlane sigh manage -e' in 'Deployment\fastlane' to clean up local certificates.
Run 'rm -r ~/Library/MobileDevice/Provisioning\ Profiles/*' to remove local certificates.

Navigate to 'https://developer.apple.com/account/resources/profiles/list' and remove named certificates that are giving issues.



