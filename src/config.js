export default {
    fileSystem: {
        path: './db'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },
    firebase: { //Cambiar por la config personal
        "type": "service_account",
        "project_id": "proyectofinal2daentrega",
        "private_key_id": "b21d9ec1bfa046a44c2f3c5c36bd98aa020652e1",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCacOCgUpmcVPIe\nqNo0Wn9kB7T4xiyAQa2K4f+xYZXKT+gjrjGt/nHO70dHJMazyYTQ/M8WqGRLRf57\nOCuwM3XMKb8d7Ns/K6mgXbgXO32DceGKamYIgOVBWxr1segG4gUM/oobigaUuCHS\n9khSf6pWxF+gbQLuT3uNQ0ShiZ2mT3SPIuqSVuNWOB56VSdCu1/1cdpsVY9LRZWc\nJvgMTF2F2otfxKJwDyu4qRRupS1CX9bC6z+gQrs+q6MF3uD2SfBLNZ/z5ooOvDd5\nLmkKVfg9GO/vDKkrZsR/gt1zzTrsUAJY5I7h2EEaG/0nbeux10azcOoE8k7CYG9K\nWqsUXcQDAgMBAAECggEAG4tjPKTOuceasSYrWKgFTWlkePQbTrqoAXuiN1gwt3b9\n75MrUB1v3djmLQWdnMYltoJISwG4dYZjx0Uy4YekDEgrymIKjl8yryPX5+jXz2A5\nug6U6RJYEQp3KffTaprYDMO/DP9WgiK/AZmkN3aGglgeuAWJPsiVQBINxQO+xsDh\nGd2mpKiqKaVs1O0HUhLC6mSudCRYBGT3llW5/2K73mxHxhnaT8FmASh+aXHCHUB8\nmiVYmlLvkv2eXBjzWY0pjAeTitvaNGCZc/B6O16eOFay70hCC/+fm804RuMjVA1k\nmtXGvj8YMrhAs5vYe0IiyggeuTK08JK2uh7cJr6ffQKBgQDJUCOxQpJ6BOKDkPYP\nyGF0Toxfy66JgrNCnBeoMC0HfSrG4q04sjju3a5Lr7oXDRpW4PVJjMqDhKyXn8Po\nbujQ+CFd5TVwWUd8qwUj8vwB1tYGWrhKTfV0lJtWE7KP5oHKuNJ7IE2ABYiGvw3x\nvIBBLKbUlbJLTFJ1mRsi3dXUNQKBgQDEZR9i9lAxatZSqR1LCF9DyulyVKKuurJ0\nZNs2CPu6oDNRGerBzn0XZuZWVO5yiQLVXN1AH19W4jFjpc+j9zXGwpb9HJoO6sfG\nPLv8nD6KFa+pAI2uOIddcZJiMdPPj9C4u1dOqR0w+yj0mS6j9Vkqu++vA7PT3Lz2\n+B7nPjDOVwKBgCSbIvJfpZz0eG/uEyBJkpcAlXvx4Jn2nzwUgCTAJd//vaCOpWry\n1XFx8/ilSpRYeJqlq1Slekmx/WRQ0+HXERS2mfKl9DKquVoNCxE/ZN28wAxFwM8a\nH/ED+L8NM+IAy0celn93H0CRQQMniJSVb0jqoqdzVQlmJnRl085iQjilAoGACCFL\niFQ8A5+xmaBolweUsgC/Yz0/ss4Fvy3BqV371cD1/uB8yGMc6JAY7u/7IwCq/lwm\nyJXD45vfgYmGq/n63uyFRZsegYmUlY9EFPP+3saBDBT6yICMkgC2l5wKcag5crxG\no/n6PGHZUy7YMG9irpMzG+KiWh3kMLEazmXTrWcCgYEAwyDDsuPxHKu5R+nK1I7X\nKsZYIGL+tvfrP4OPqocVBGz6PrGxrnIhS/LhrC10HIlStLRYEw5S4dQSF8OwEBXB\nQxvN8392+5VdyTUaVRoywt5go4N4EPFs0h26Hs4J3aNBw2bRC/U1FnlI4SY3w3M1\nVCVxOXy2jDAMnWPN+xJnogo=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-piw69@proyectofinal2daentrega.iam.gserviceaccount.com",
        "client_id": "107103550044847342214",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-piw69%40proyectofinal2daentrega.iam.gserviceaccount.com"
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'coderhouse',
            password: 'coderhouse',
            database: 'coderhouse'
        }
    }
}
