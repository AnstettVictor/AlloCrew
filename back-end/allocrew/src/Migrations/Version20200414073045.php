<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200414073045 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(255) DEFAULT NULL, lastname VARCHAR(255) DEFAULT NULL, age SMALLINT DEFAULT NULL, location VARCHAR(255) DEFAULT NULL, title VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, experience LONGTEXT DEFAULT NULL, portfolio VARCHAR(255) DEFAULT NULL, picture VARCHAR(255) DEFAULT NULL, bannerpicture VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE message (id INT AUTO_INCREMENT NOT NULL, discussion_id INT NOT NULL, user_id INT NOT NULL, content LONGTEXT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_B6BD307F1ADED311 (discussion_id), INDEX IDX_B6BD307FA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE announcement (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, category VARCHAR(255) NOT NULL, active TINYINT(1) NOT NULL, voluntary TINYINT(1) NOT NULL, date_start DATETIME NOT NULL, date_end DATETIME NOT NULL, location VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, picture VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_4DB9D91CA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE discussion (id INT AUTO_INCREMENT NOT NULL, announcement_id INT NOT NULL, receiver_id INT NOT NULL, creator_id INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_C0B9F90F913AEA17 (announcement_id), INDEX IDX_C0B9F90FCD53EDB6 (receiver_id), INDEX IDX_C0B9F90F61220EA6 (creator_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307F1ADED311 FOREIGN KEY (discussion_id) REFERENCES discussion (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE announcement ADD CONSTRAINT FK_4DB9D91CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE discussion ADD CONSTRAINT FK_C0B9F90F913AEA17 FOREIGN KEY (announcement_id) REFERENCES announcement (id)');
        $this->addSql('ALTER TABLE discussion ADD CONSTRAINT FK_C0B9F90FCD53EDB6 FOREIGN KEY (receiver_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE discussion ADD CONSTRAINT FK_C0B9F90F61220EA6 FOREIGN KEY (creator_id) REFERENCES user (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FA76ED395');
        $this->addSql('ALTER TABLE announcement DROP FOREIGN KEY FK_4DB9D91CA76ED395');
        $this->addSql('ALTER TABLE discussion DROP FOREIGN KEY FK_C0B9F90FCD53EDB6');
        $this->addSql('ALTER TABLE discussion DROP FOREIGN KEY FK_C0B9F90F61220EA6');
        $this->addSql('ALTER TABLE discussion DROP FOREIGN KEY FK_C0B9F90F913AEA17');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307F1ADED311');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE message');
        $this->addSql('DROP TABLE announcement');
        $this->addSql('DROP TABLE discussion');
    }
}
