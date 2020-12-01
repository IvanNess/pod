/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      isClient
      isService
      isOrganization
      companyName
      firstName
      lastName
      birthDate
      username
      login
      email
      mobile
      NIP
      adressId
      nationalityId
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      services {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      offers {
        items {
          id
          creatorUsername
          orderId
          isApproved
          candidateId
          createdAt
          updatedAt
          candidate {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      messages {
        items {
          id
          creatorUsername
          orderId
          userId
          createdAt
          updatedAt
          user {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      reviewsCreated {
        items {
          id
          creatorUsername
          rating
          text
          type
          orderId
          reviewerId
          reviewedId
          createdAt
          updatedAt
          reviewer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          reviewed {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      reviewsReceived {
        items {
          id
          creatorUsername
          rating
          text
          type
          orderId
          reviewerId
          reviewedId
          createdAt
          updatedAt
          reviewer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          reviewed {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      adress {
        id
        creatorUsername
        regionId
        cityId
        street
        house
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
        postcode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      nationality {
        id
        name
        stringCode
        isMain
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      isClient
      isService
      isOrganization
      companyName
      firstName
      lastName
      birthDate
      username
      login
      email
      mobile
      NIP
      adressId
      nationalityId
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      services {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      offers {
        items {
          id
          creatorUsername
          orderId
          isApproved
          candidateId
          createdAt
          updatedAt
          candidate {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      messages {
        items {
          id
          creatorUsername
          orderId
          userId
          createdAt
          updatedAt
          user {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      reviewsCreated {
        items {
          id
          creatorUsername
          rating
          text
          type
          orderId
          reviewerId
          reviewedId
          createdAt
          updatedAt
          reviewer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          reviewed {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      reviewsReceived {
        items {
          id
          creatorUsername
          rating
          text
          type
          orderId
          reviewerId
          reviewedId
          createdAt
          updatedAt
          reviewer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          reviewed {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      adress {
        id
        creatorUsername
        regionId
        cityId
        street
        house
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
        postcode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      nationality {
        id
        name
        stringCode
        isMain
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      isClient
      isService
      isOrganization
      companyName
      firstName
      lastName
      birthDate
      username
      login
      email
      mobile
      NIP
      adressId
      nationalityId
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      services {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      offers {
        items {
          id
          creatorUsername
          orderId
          isApproved
          candidateId
          createdAt
          updatedAt
          candidate {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      messages {
        items {
          id
          creatorUsername
          orderId
          userId
          createdAt
          updatedAt
          user {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      reviewsCreated {
        items {
          id
          creatorUsername
          rating
          text
          type
          orderId
          reviewerId
          reviewedId
          createdAt
          updatedAt
          reviewer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          reviewed {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      reviewsReceived {
        items {
          id
          creatorUsername
          rating
          text
          type
          orderId
          reviewerId
          reviewedId
          createdAt
          updatedAt
          reviewer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          reviewed {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      adress {
        id
        creatorUsername
        regionId
        cityId
        street
        house
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
        postcode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      nationality {
        id
        name
        stringCode
        isMain
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      info
      title
      description
      images
      creatorUsername
      customerId
      isServiced
      isActive
      serviceId
      categoryId
      adressId
      cityId
      createdAt
      updatedAt
      customer {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      service {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      offers {
        items {
          id
          creatorUsername
          orderId
          isApproved
          candidateId
          createdAt
          updatedAt
          candidate {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      messages {
        items {
          id
          creatorUsername
          orderId
          userId
          createdAt
          updatedAt
          user {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      category {
        id
        name
        stringCode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        subCategories {
          items {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
          nextToken
        }
      }
      subCategories {
        items {
          id
          orderId
          subCategoryId
          createdAt
          updatedAt
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          subCategory {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
        }
        nextToken
      }
      reviews {
        items {
          id
          creatorUsername
          rating
          text
          type
          orderId
          reviewerId
          reviewedId
          createdAt
          updatedAt
          reviewer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          reviewed {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      adress {
        id
        creatorUsername
        regionId
        cityId
        street
        house
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
        postcode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      city {
        id
        name
        stringCode
        regionId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      info
      title
      description
      images
      creatorUsername
      customerId
      isServiced
      isActive
      serviceId
      categoryId
      adressId
      cityId
      createdAt
      updatedAt
      customer {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      service {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      offers {
        items {
          id
          creatorUsername
          orderId
          isApproved
          candidateId
          createdAt
          updatedAt
          candidate {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      messages {
        items {
          id
          creatorUsername
          orderId
          userId
          createdAt
          updatedAt
          user {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      category {
        id
        name
        stringCode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        subCategories {
          items {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
          nextToken
        }
      }
      subCategories {
        items {
          id
          orderId
          subCategoryId
          createdAt
          updatedAt
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          subCategory {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
        }
        nextToken
      }
      reviews {
        items {
          id
          creatorUsername
          rating
          text
          type
          orderId
          reviewerId
          reviewedId
          createdAt
          updatedAt
          reviewer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          reviewed {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      adress {
        id
        creatorUsername
        regionId
        cityId
        street
        house
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
        postcode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      city {
        id
        name
        stringCode
        regionId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      info
      title
      description
      images
      creatorUsername
      customerId
      isServiced
      isActive
      serviceId
      categoryId
      adressId
      cityId
      createdAt
      updatedAt
      customer {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      service {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      offers {
        items {
          id
          creatorUsername
          orderId
          isApproved
          candidateId
          createdAt
          updatedAt
          candidate {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      messages {
        items {
          id
          creatorUsername
          orderId
          userId
          createdAt
          updatedAt
          user {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      category {
        id
        name
        stringCode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        subCategories {
          items {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
          nextToken
        }
      }
      subCategories {
        items {
          id
          orderId
          subCategoryId
          createdAt
          updatedAt
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          subCategory {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
        }
        nextToken
      }
      reviews {
        items {
          id
          creatorUsername
          rating
          text
          type
          orderId
          reviewerId
          reviewedId
          createdAt
          updatedAt
          reviewer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          reviewed {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      adress {
        id
        creatorUsername
        regionId
        cityId
        street
        house
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
        postcode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      city {
        id
        name
        stringCode
        regionId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
    }
  }
`;
export const onCreateOffer = /* GraphQL */ `
  subscription OnCreateOffer {
    onCreateOffer {
      id
      creatorUsername
      orderId
      isApproved
      candidateId
      createdAt
      updatedAt
      candidate {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
    }
  }
`;
export const onUpdateOffer = /* GraphQL */ `
  subscription OnUpdateOffer {
    onUpdateOffer {
      id
      creatorUsername
      orderId
      isApproved
      candidateId
      createdAt
      updatedAt
      candidate {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
    }
  }
`;
export const onDeleteOffer = /* GraphQL */ `
  subscription OnDeleteOffer {
    onDeleteOffer {
      id
      creatorUsername
      orderId
      isApproved
      candidateId
      createdAt
      updatedAt
      candidate {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      creatorUsername
      orderId
      userId
      createdAt
      updatedAt
      user {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      creatorUsername
      orderId
      userId
      createdAt
      updatedAt
      user {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      creatorUsername
      orderId
      userId
      createdAt
      updatedAt
      user {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      stringCode
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      subCategories {
        items {
          id
          name
          stringCode
          categoryId
          createdAt
          updatedAt
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          orders {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      stringCode
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      subCategories {
        items {
          id
          name
          stringCode
          categoryId
          createdAt
          updatedAt
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          orders {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      stringCode
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      subCategories {
        items {
          id
          name
          stringCode
          categoryId
          createdAt
          updatedAt
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          orders {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateSubCategory = /* GraphQL */ `
  subscription OnCreateSubCategory {
    onCreateSubCategory {
      id
      name
      stringCode
      categoryId
      createdAt
      updatedAt
      category {
        id
        name
        stringCode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        subCategories {
          items {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
          nextToken
        }
      }
      orders {
        items {
          id
          orderId
          subCategoryId
          createdAt
          updatedAt
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          subCategory {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateSubCategory = /* GraphQL */ `
  subscription OnUpdateSubCategory {
    onUpdateSubCategory {
      id
      name
      stringCode
      categoryId
      createdAt
      updatedAt
      category {
        id
        name
        stringCode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        subCategories {
          items {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
          nextToken
        }
      }
      orders {
        items {
          id
          orderId
          subCategoryId
          createdAt
          updatedAt
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          subCategory {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteSubCategory = /* GraphQL */ `
  subscription OnDeleteSubCategory {
    onDeleteSubCategory {
      id
      name
      stringCode
      categoryId
      createdAt
      updatedAt
      category {
        id
        name
        stringCode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        subCategories {
          items {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
          nextToken
        }
      }
      orders {
        items {
          id
          orderId
          subCategoryId
          createdAt
          updatedAt
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          subCategory {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateOrderSubCategory = /* GraphQL */ `
  subscription OnCreateOrderSubCategory {
    onCreateOrderSubCategory {
      id
      orderId
      subCategoryId
      createdAt
      updatedAt
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
      subCategory {
        id
        name
        stringCode
        categoryId
        createdAt
        updatedAt
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        orders {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateOrderSubCategory = /* GraphQL */ `
  subscription OnUpdateOrderSubCategory {
    onUpdateOrderSubCategory {
      id
      orderId
      subCategoryId
      createdAt
      updatedAt
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
      subCategory {
        id
        name
        stringCode
        categoryId
        createdAt
        updatedAt
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        orders {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteOrderSubCategory = /* GraphQL */ `
  subscription OnDeleteOrderSubCategory {
    onDeleteOrderSubCategory {
      id
      orderId
      subCategoryId
      createdAt
      updatedAt
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
      subCategory {
        id
        name
        stringCode
        categoryId
        createdAt
        updatedAt
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        orders {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($creatorUsername: String) {
    onCreateReview(creatorUsername: $creatorUsername) {
      id
      creatorUsername
      rating
      text
      type
      orderId
      reviewerId
      reviewedId
      createdAt
      updatedAt
      reviewer {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      reviewed {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
    }
  }
`;
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($creatorUsername: String) {
    onUpdateReview(creatorUsername: $creatorUsername) {
      id
      creatorUsername
      rating
      text
      type
      orderId
      reviewerId
      reviewedId
      createdAt
      updatedAt
      reviewer {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      reviewed {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
    }
  }
`;
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($creatorUsername: String) {
    onDeleteReview(creatorUsername: $creatorUsername) {
      id
      creatorUsername
      rating
      text
      type
      orderId
      reviewerId
      reviewedId
      createdAt
      updatedAt
      reviewer {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      reviewed {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
    }
  }
`;
export const onCreateAdress = /* GraphQL */ `
  subscription OnCreateAdress {
    onCreateAdress {
      id
      creatorUsername
      regionId
      cityId
      street
      house
      nationality {
        id
        name
        stringCode
        isMain
        createdAt
        updatedAt
      }
      postcode
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      city {
        id
        name
        stringCode
        regionId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      region {
        id
        name
        stringCode
        createdAt
        updatedAt
        cities {
          items {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateAdress = /* GraphQL */ `
  subscription OnUpdateAdress {
    onUpdateAdress {
      id
      creatorUsername
      regionId
      cityId
      street
      house
      nationality {
        id
        name
        stringCode
        isMain
        createdAt
        updatedAt
      }
      postcode
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      city {
        id
        name
        stringCode
        regionId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      region {
        id
        name
        stringCode
        createdAt
        updatedAt
        cities {
          items {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteAdress = /* GraphQL */ `
  subscription OnDeleteAdress {
    onDeleteAdress {
      id
      creatorUsername
      regionId
      cityId
      street
      house
      nationality {
        id
        name
        stringCode
        isMain
        createdAt
        updatedAt
      }
      postcode
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      city {
        id
        name
        stringCode
        regionId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      region {
        id
        name
        stringCode
        createdAt
        updatedAt
        cities {
          items {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateCity = /* GraphQL */ `
  subscription OnCreateCity {
    onCreateCity {
      id
      name
      stringCode
      regionId
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      region {
        id
        name
        stringCode
        createdAt
        updatedAt
        cities {
          items {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateCity = /* GraphQL */ `
  subscription OnUpdateCity {
    onUpdateCity {
      id
      name
      stringCode
      regionId
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      region {
        id
        name
        stringCode
        createdAt
        updatedAt
        cities {
          items {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteCity = /* GraphQL */ `
  subscription OnDeleteCity {
    onDeleteCity {
      id
      name
      stringCode
      regionId
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      region {
        id
        name
        stringCode
        createdAt
        updatedAt
        cities {
          items {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateRegion = /* GraphQL */ `
  subscription OnCreateRegion {
    onCreateRegion {
      id
      name
      stringCode
      createdAt
      updatedAt
      cities {
        items {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateRegion = /* GraphQL */ `
  subscription OnUpdateRegion {
    onUpdateRegion {
      id
      name
      stringCode
      createdAt
      updatedAt
      cities {
        items {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteRegion = /* GraphQL */ `
  subscription OnDeleteRegion {
    onDeleteRegion {
      id
      name
      stringCode
      createdAt
      updatedAt
      cities {
        items {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateNationality = /* GraphQL */ `
  subscription OnCreateNationality {
    onCreateNationality {
      id
      name
      stringCode
      isMain
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNationality = /* GraphQL */ `
  subscription OnUpdateNationality {
    onUpdateNationality {
      id
      name
      stringCode
      isMain
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNationality = /* GraphQL */ `
  subscription OnDeleteNationality {
    onDeleteNationality {
      id
      name
      stringCode
      isMain
      createdAt
      updatedAt
    }
  }
`;
