import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsFooter extends Schema.Component {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'Footer';
    icon: 'code';
    description: '';
  };
  attributes: {
    work: Attribute.Component<'footer.footer-group'>;
    company: Attribute.Component<'footer.footer-group'>;
  };
}

export interface ComponentsHero extends Schema.Component {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'hero';
    icon: 'crown';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentsKeyword extends Schema.Component {
  collectionName: 'components_components_keywords';
  info: {
    displayName: 'Keyword';
    icon: 'key';
  };
  attributes: {};
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    page: Attribute.Relation<'components.link', 'oneToOne', 'api::page.page'>;
  };
}

export interface ComponentsNavbar extends Schema.Component {
  collectionName: 'components_components_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'code';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'components.link', true>;
    address: Attribute.Component<'navbar.address-section'>;
    contactLabel: Attribute.Text;
    socials: Attribute.Component<'navbar.social-section'>;
  };
}

export interface ComponentsPageHeader extends Schema.Component {
  collectionName: 'components_components_page_headers';
  info: {
    displayName: 'PageHeader';
    icon: 'file';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
    content: Attribute.Blocks;
    description: Attribute.Text;
  };
}

export interface ComponentsQuote extends Schema.Component {
  collectionName: 'components_components_quotes';
  info: {
    displayName: 'quote';
    icon: 'write';
  };
  attributes: {
    quote: Attribute.Text;
    author: Attribute.String;
  };
}

export interface ComponentsServiceItem extends Schema.Component {
  collectionName: 'components_components_service_items';
  info: {
    displayName: 'ServiceItem';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentsSlugLink extends Schema.Component {
  collectionName: 'components_components_slug_links';
  info: {
    displayName: 'SlugLink';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String;
    slug: Attribute.String;
  };
}

export interface ComponentsTestimonial extends Schema.Component {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'thumbUp';
    description: '';
  };
  attributes: {
    author: Attribute.String;
    authorTitle: Attribute.String;
    message: Attribute.Text;
  };
}

export interface FooterFooterGroup extends Schema.Component {
  collectionName: 'components_footer_footer_groups';
  info: {
    displayName: 'FooterGroup';
    icon: 'underline';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    pages: Attribute.Relation<
      'footer.footer-group',
      'oneToMany',
      'api::page.page'
    >;
    projects: Attribute.Relation<
      'footer.footer-group',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface NavbarAddressSection extends Schema.Component {
  collectionName: 'components_navbar_address_sections';
  info: {
    displayName: 'AddressSection';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    address: Attribute.Relation<
      'navbar.address-section',
      'oneToOne',
      'api::address.address'
    >;
  };
}

export interface NavbarSocialSection extends Schema.Component {
  collectionName: 'components_navbar_social_sections';
  info: {
    displayName: 'SocialSection';
    icon: 'thumbUp';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    socials: Attribute.Relation<
      'navbar.social-section',
      'oneToMany',
      'api::social.social'
    >;
  };
}

export interface SectionProjects extends Schema.Component {
  collectionName: 'components_section_projects';
  info: {
    displayName: 'projects';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    seeMoreLabel: Attribute.String;
    projects: Attribute.Relation<
      'section.projects',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface SectionServices extends Schema.Component {
  collectionName: 'components_section_services';
  info: {
    displayName: 'services';
    icon: 'grid';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    services: Attribute.Component<'components.service-item', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.footer': ComponentsFooter;
      'components.hero': ComponentsHero;
      'components.keyword': ComponentsKeyword;
      'components.link': ComponentsLink;
      'components.navbar': ComponentsNavbar;
      'components.page-header': ComponentsPageHeader;
      'components.quote': ComponentsQuote;
      'components.service-item': ComponentsServiceItem;
      'components.slug-link': ComponentsSlugLink;
      'components.testimonial': ComponentsTestimonial;
      'footer.footer-group': FooterFooterGroup;
      'navbar.address-section': NavbarAddressSection;
      'navbar.social-section': NavbarSocialSection;
      'section.projects': SectionProjects;
      'section.services': SectionServices;
    }
  }
}
