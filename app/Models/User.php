<?php

declare(strict_types=1);

namespace BeycanPress\Chainium\Models;

/**
 * User table model
 */
class User
{
    use TableCreator;

    /**
     * @var string
     */
    public string $version = '1';

    /**
     * @var string
     */
    public string $tableName = 'beycanpress_chainium_user';

    /**
     * @var array<mixed>
     */
    public array $columns = [];

    /**
     * @var object
     */
    public object $db;

    /**
     * constructor
     */
    public function __construct()
    {
        $this->initWPDB();
        $this->addColumns([
            'walletAddress' => [
                'type' => 'string',
                'length' => 70,
                'index' => [
                    'type' => 'unique'
                ]
            ],
            'userId' => [
                'type' => 'bigint',
            ],
            'loginSignature' => [
                'type' => 'text'
            ],
            'lastLoginDate' => [
                'type' => 'timestamp'
            ],
            'matchedDate' => [
                'type' => 'timestamp',
                'default' => 'current_timestamp',
            ],
        ]);
        $this->createTable();
    }

    /**
     * @return boolean
     */
    public function existTable(): bool
    {
        return (bool) $this->db->get_var("SHOW TABLES LIKE '{$this->tableName}'");
    }

    /**
     * @param array<mixed> $columns
     * @return void
     */
    public function addColumns(array $columns): void
    {
        $this->columns = array_merge($this->columns, $columns);
    }

    /**
     * @param string $columnName
     * @return boolean
     */
    public function existColumn(string $columnName): bool
    {
        return (bool) $this->db->get_var(
            $this->db->prepare(
                "SHOW COLUMNS FROM `{$this->tableName}` LIKE %s",
                $columnName
            )
        );
    }

    /**
     * @param string $columnName
     * @param array<mixed> $properties
     * @param string $beforeColumn
     * @return void
     */
    public function addColumn(string $columnName, array $properties, string $beforeColumn): void
    {
        if ($this->existColumn($columnName)) {
            return;
        }
        $columnQuery = $this->arrayToSqlQuery([$columnName => $properties]);
        $this->db->get_var(
            $this->db->prepare(
                "ALTER TABLE `{$this->tableName}` ADD COLUMN $columnQuery AFTER %s",
                $beforeColumn
            )
        );
    }

    /**
     * @return void
     */
    public function initWPDB(): void
    {
        global $wpdb;
        $this->db = $wpdb;
    }

    /**
     * @param string $text
     * @return array<mixed>
     */
    public function search(string $text): array
    {
        return $this->db->get_results(
            $this->db->prepare(
                "SELECT * FROM {$this->tableName} 
            WHERE walletAddress LIKE '%s'
            ORDER BY id DESC",
                '%' . $this->db->esc_like($text) . '%'
            )
        );
    }

    /**
     * @param string $text
     * @return string
     */
    public function searchCount(string $text): int
    {
        return (int) $this->db->get_var(
            $this->db->prepare(
                "SELECT COUNT(id) FROM {$this->tableName} 
            WHERE walletAddress LIKE '%s'",
                '%' . $this->db->esc_like($text) . '%'
            )
        );
    }

    /**
     * @param int $userId
     * @return object|null
     */
    public function findOneByUserId(int $userId): ?object
    {
        return $this->db->get_row(
            $this->db->prepare(
                "SELECT * FROM {$this->tableName} WHERE userId = %d",
                $userId
            )
        );
    }

    /**
     * @param string $address
     * @return object|null
     */
    public function findOneByWalletAddress(string $address): ?object
    {
        return $this->db->get_row(
            $this->db->prepare(
                "SELECT * FROM {$this->tableName} WHERE walletAddress = %s",
                $address
            )
        );
    }

    /**
     * @return array<mixed>
     */
    public function getAll(): array
    {
        return $this->db->get_results("SELECT * FROM {$this->tableName}");
    }

    /**
     * @param array<mixed> $where
     * @param mixed $whereFormat
     * @return int|bool
     */
    public function delete(array $where, mixed $whereFormat = null): int|bool
    {
        return $this->db->delete($this->tableName, $where, $whereFormat);
    }

    /**
     * @param array<mixed> $data
     * @param mixed $format
     * @return int|bool
     */
    public function insert(array $data, mixed $format = null): int|bool
    {
        $this->db->insert($this->tableName, $data, $format);
        return $this->db->insert_id;
    }

    /**
     * @param array<mixed> $data
     * @param array<mixed> $where
     * @param mixed $format
     * @param mixed $whereFormat
     * @return int|bool
     */
    public function update(array $data, array $where, mixed $format = null, mixed $whereFormat = null): int|bool
    {
        return $this->db->update($this->tableName, $data, $where, $format, $whereFormat);
    }
}
