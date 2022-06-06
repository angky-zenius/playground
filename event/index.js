// const TicketManager = require('./ticketManager.js');
// const EmailService = require('./emailService.js');
// const DatabaseService = require('./databaseService.js');

// const ticketManager = new TicketManager(3);
// const emailService = new EmailService();
// const databaseService = new DatabaseService();

// const onBuy = (email, price, timestamp) => {
//   emailService.send(email);
//   databaseService.save(email, price, timestamp)
// };

// ticketManager.on('buy', onBuy);
// ticketManager.on('buy', onBuy);

// ticketManager.on('error', (error) => {
//   console.error(`Problems buying ticket, ${error}`);
// });

// console.log(`We have ${ticketManager.listenerCount('buy')} buy listener(s)`);
// console.log(`We have ${ticketManager.listenerCount('error')} error listener(s)`);

// ticketManager.buy('angky@gmail.com', 100000);
// ticketManager.buy('angky@gmail.com', 200000);
// ticketManager.buy('angky@gmail.com', 300000);
// ticketManager.buy('angky@gmail.com', 400000);

const publicKey1 = "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIISKQm0WiPeZYwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjIw\nNTI3MDkzODQxWhcNMjIwNjEyMjE1MzQxWjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBALX1+cd4asVPQavZh+94VYLOukPRUgiJIsAvYefgg0bs8gy7\nFZaBo/WjZwTtyHdguVnlYrTIBJbu6IMWTPFL6/1TOfUr50nwJFt733JVnkfcVGqz\ndYKk1jjVl5OD3J6S2qdpQIlyHKRfczPE2ifmGJz2cDM1iu868ALyTYbRLsFdyT4w\nrboobbf+Cg9ByzlAOQm3iXOGoi71MXbDqOprQhbWzTNiIN9wDR8e5tvISz+trSqj\nXQvCqGQZRU7Ir3xQBfHZflP3SEgCqVY1YW6OsVFAEeKLUVDRzTmc8egrAZwBtrId\nMOBLhiHyutWuj3oi1LHvPl9ldlPNPzGQ0wR771sCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAEYCqx8plVTf4cEeo0hQO6LtNkxjDTPkHD/VZ8x2hMvy\nvByLH0OGNGTr4mkcMeRK1wipDFpMyHsKU+woce7qtuCyZ7uSF7Ke83buBlTgjlau\niBNI0COg8qV52Ekr9s9JqKOztatA0fJINlFFVh3kQOhWDBtS8PswdGWjK8qmUmPP\n6/MBXMXq1qWVX+sY8stE+BOOPtoIK0vPFCxjUQhD7YAd3SfOdw6+qpV0QBmcrjnR\nhZhWTgw/LJ3C6Ichq44Q9pGLEPzO066kopSxFdH316bWoPWuTPZZiI5w7hBOnuZs\nrzIOl5PJWzmmT9TsK9pZlogROMdRFkksGNy+5AbmWDs=\n-----END CERTIFICATE-----\n";
const publicKey2 = "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIQ8idkMV5aoQwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAwwmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjIw\nNjA0MDkzODQyWhcNMjIwNjIwMjE1MzQyWjAxMS8wLQYDVQQDDCZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAM9SHVisixHJe5omHxC4iUIdPoKmODvIkVWt4VgJQk4XNUn3\nm8J1JRIVfIuNCLFiwvQUKu2Gb8e4pQQY0DAuTeno3NY+HLvb6dgq04tXWWo44IHQ\n8t6IZoctzI9Vz41Vi/te9sk0fU5mMSX2zkQPmN4eSkwA9Vxcm1I1C+9m2njM6+Fy\nrGfA5PPpFCKEU3rvWNalS/oOHQK9oG9ch4QXDm6ax6wgPXdxCMTm/oX58h+0d4F0\n0iO20NEHFbjT5C+B4S+d4HOYVfY3tJOmtVBHxMNGe4N5LamsLQIqDRoQId14oT/A\nYrFvp1RYLkkNXfiShmkHtgH9iutDi6as5LIzLgUCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAJjhWc3AO86f/5SFontdVUrRC+C7c+u9EyE8WMnEX5eK\nU05vEiqqi22MR+Cv3SaB1gC/koKt7gGWKR+n7yRCdRHQALK0gSpIb6K4aSJR3qKW\naR0TrXSisRVEHwMXVWAXMHM+jCHsFCDf4EJlm2CJMLODKNdwOsRdxG0No6sB7I92\nattm8pJ2+qL+Q/Pe7NwTMd5PlEHxebJZFDAE5+F6QeO7hRPftA6B/PT+lTSRmdbS\nRIJgAJmUFO5rSmcIsrcyCCrI9IbwKyA7qP8jKQ30ROHJyR10smTRYAIvpXhZbPm2\nPxgtkJNN0GCVv7fLEnpWzF4+6nUe73sbdzLPdXIdL6A=\n-----END CERTIFICATE-----\n";
const privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDASUarxmbnYUQZ\nD+MvKjS9y7ChH82UAKV6Ec37KscaDNeTc/QWpezE6E7M6wt65LpLvILGQWMwWTHF\nikIV7qGQLW7JnLsSieeBE8+InTK82Pt7cIKQSukME1nvM7ngan6v6EXEgwG2UAM6\nCbyHJ/QQLlBLaEbKOdd3pOzYQD14MTJdvEed8w/v3yZf4cPNuaSmaWLpsIeux1Aa\nen3kBB5vP+ocm5d+2fCKf+Y+mr6PAhuwq2NtQT6RTzNoC8i04O16jflho+gB4+tQ\nAtV2TvFoFWpvnxG5a2gS+O37MAtVaR1Uz/drbUH3J8JbaUBNMt+jfP31BaNqW8uN\n+/ZehfGZAgMBAAECggEAWGeYIVOnbgvPFkKyrbWW6AflHj8T8k7Vxai37hk9zuFG\nn9l4yIziraksyZPrBEZyzG1QJrxbURhBBNRLC/BZwYLR48m2TJCwqiykhufXMvID\ntT4GGTcHrHCdMZezhtUPh+qfYPjmaZ6hzSY60lzxHhtc+T5pBYLQaIagCdCHMmGI\nBUIyoRjzyHOntPO5XQJ3AQgtfPowA9d/60dB8EJcapsDNe1DHJNwVK2jdHZ7JhL6\nLtjIKXcLPKmw7z1mRFn5drRyIrSVIjrnTzksETgqSBO2PtOof0ICe4dZJ9q7PzZG\nXUejvOwsAf7X3OdoWp3Dhiol4rtS4Lt5jSNAMGhxXQKBgQDfNxFFtwAgn4E6t77s\nYmof8ckcuEplYNH1TBIMkIUg6aTGyDltGTxcXorZv11rIQ9HVHZfj5hK7ywBQMTG\ncpog7zacJBlsHwnU7g8ty/PmcGgJqxAzxPmzopKhWm8RhFafRRFivlGgVLBvDzgU\nDWrks0uaazOZuNPVGiBCeQ3J/wKBgQDch0bdACB5w96T4IWdsrKKt3iEEdjBukOX\nDhGZ0JeQbjiBvYMHWfIOwR4KwSMKtski5p6ZA9/QfKcYSHGfIq1Q7UUFr3gmglNt\nEZCYSt1PszBt/eq+FhFkzJ6BLOicI0B6RqWnFTADsl0kJUtFZdW1fZtlWV1amkYf\ne/LEaE5UZwKBgQDTm4/LSGZdhvjq4mCkFdRHvl6K1IbqvrOsWNZPhP5AKl8kd5JB\nRAg+BP6a2NjGA4xJcd/aTfXxK/XKpk0lWGWXTU+3DF3xaydV7e0D3HK3Bd8LM1lj\nyptx2XAqeOIMeCnqSX7m3kfhuAee8Y2XLPUmJHdKx9AeLeLcBi2I9tvEnwKBgQCK\nkmJ/6l19xgttho7PWgOA0OrkqkY27XEdURTUP1ONyQSu2cOk8er9RHI5NcVsLRFU\nYe/UnK+d1UY2JwdmhKa9jGpruSfZotkDVx8x4xEPzLwo0X4Y9cr2OPF8oBiGTExu\nyUe8Jr8mA4UtelXDBMt2ILhtxeq4TOq1S/BvZE+cDwKBgQDIklWozGsrQSESq4OE\nG1fwJfyeHMjFhr1OYGT3/C4H3tj+jD0US6RYwoBiMrOd+Um3xlSZdFz/SHGGgECG\nJURNf6XaLBtLXpqRXzgvaTLWA2uFlsgqHOfmgstYVuD9oCwpwLmjZP2l2LN4847e\njz+fX5C8/V+VkWjsxZIXv8jVRw==\n-----END PRIVATE KEY-----\n";
console.log(publicKey1);
console.log("---------- CERT 1 ----------");
console.log(publicKey2);
console.log("---------- CERT 2 ----------");
console.log(privateKey);