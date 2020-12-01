/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      isClient
      isService
      isOrganization
      companyName
      firstName
      lastName
      birthDate
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      isClient
      isService
      isOrganization
      companyName
      firstName
      lastName
      birthDate
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      isClient
      isService
      isOrganization
      companyName
      firstName
      lastName
      birthDate
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      info
      title
      description
      images
      creatorUsername
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      info
      title
      description
      images
      creatorUsername
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      info
      title
      description
      images
      creatorUsername
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
export const createOffer = /* GraphQL */ `
  mutation CreateOffer(
    $input: CreateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    createOffer(input: $input, condition: $condition) {
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
export const updateOffer = /* GraphQL */ `
  mutation UpdateOffer(
    $input: UpdateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    updateOffer(input: $input, condition: $condition) {
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
export const deleteOffer = /* GraphQL */ `
  mutation DeleteOffer(
    $input: DeleteOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    deleteOffer(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createSubCategory = /* GraphQL */ `
  mutation CreateSubCategory(
    $input: CreateSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    createSubCategory(input: $input, condition: $condition) {
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
export const updateSubCategory = /* GraphQL */ `
  mutation UpdateSubCategory(
    $input: UpdateSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    updateSubCategory(input: $input, condition: $condition) {
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
export const deleteSubCategory = /* GraphQL */ `
  mutation DeleteSubCategory(
    $input: DeleteSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    deleteSubCategory(input: $input, condition: $condition) {
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
export const createOrderSubCategory = /* GraphQL */ `
  mutation CreateOrderSubCategory(
    $input: CreateOrderSubCategoryInput!
    $condition: ModelOrderSubCategoryConditionInput
  ) {
    createOrderSubCategory(input: $input, condition: $condition) {
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
export const updateOrderSubCategory = /* GraphQL */ `
  mutation UpdateOrderSubCategory(
    $input: UpdateOrderSubCategoryInput!
    $condition: ModelOrderSubCategoryConditionInput
  ) {
    updateOrderSubCategory(input: $input, condition: $condition) {
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
export const deleteOrderSubCategory = /* GraphQL */ `
  mutation DeleteOrderSubCategory(
    $input: DeleteOrderSubCategoryInput!
    $condition: ModelOrderSubCategoryConditionInput
  ) {
    deleteOrderSubCategory(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const createAdress = /* GraphQL */ `
  mutation CreateAdress(
    $input: CreateAdressInput!
    $condition: ModelAdressConditionInput
  ) {
    createAdress(input: $input, condition: $condition) {
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
export const updateAdress = /* GraphQL */ `
  mutation UpdateAdress(
    $input: UpdateAdressInput!
    $condition: ModelAdressConditionInput
  ) {
    updateAdress(input: $input, condition: $condition) {
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
export const deleteAdress = /* GraphQL */ `
  mutation DeleteAdress(
    $input: DeleteAdressInput!
    $condition: ModelAdressConditionInput
  ) {
    deleteAdress(input: $input, condition: $condition) {
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
export const createCity = /* GraphQL */ `
  mutation CreateCity(
    $input: CreateCityInput!
    $condition: ModelCityConditionInput
  ) {
    createCity(input: $input, condition: $condition) {
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
export const updateCity = /* GraphQL */ `
  mutation UpdateCity(
    $input: UpdateCityInput!
    $condition: ModelCityConditionInput
  ) {
    updateCity(input: $input, condition: $condition) {
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
export const deleteCity = /* GraphQL */ `
  mutation DeleteCity(
    $input: DeleteCityInput!
    $condition: ModelCityConditionInput
  ) {
    deleteCity(input: $input, condition: $condition) {
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
export const createRegion = /* GraphQL */ `
  mutation CreateRegion(
    $input: CreateRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    createRegion(input: $input, condition: $condition) {
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
export const updateRegion = /* GraphQL */ `
  mutation UpdateRegion(
    $input: UpdateRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    updateRegion(input: $input, condition: $condition) {
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
export const deleteRegion = /* GraphQL */ `
  mutation DeleteRegion(
    $input: DeleteRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    deleteRegion(input: $input, condition: $condition) {
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
export const createNationality = /* GraphQL */ `
  mutation CreateNationality(
    $input: CreateNationalityInput!
    $condition: ModelNationalityConditionInput
  ) {
    createNationality(input: $input, condition: $condition) {
      id
      name
      stringCode
      isMain
      createdAt
      updatedAt
    }
  }
`;
export const updateNationality = /* GraphQL */ `
  mutation UpdateNationality(
    $input: UpdateNationalityInput!
    $condition: ModelNationalityConditionInput
  ) {
    updateNationality(input: $input, condition: $condition) {
      id
      name
      stringCode
      isMain
      createdAt
      updatedAt
    }
  }
`;
export const deleteNationality = /* GraphQL */ `
  mutation DeleteNationality(
    $input: DeleteNationalityInput!
    $condition: ModelNationalityConditionInput
  ) {
    deleteNationality(input: $input, condition: $condition) {
      id
      name
      stringCode
      isMain
      createdAt
      updatedAt
    }
  }
`;
